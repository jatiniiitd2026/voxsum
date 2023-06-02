#!/bin/bash

set -uoe pipefail

semVer=${semVer:-"[0-2].[0-9]+.[x0-9]+"}
environment=${environment:-"staging"}
commitDepth=${commitDepth:-"2"}
releaseVersion=${releaseVersion:-$(cat version)}

function usage() {
    echo "
     Wrote and maintained by Shubham Girdhar.
     Found a Bug? Send a mail to: shubham.girdhar@knoldus.com
     Options:
        -e | --environment <staging|production> default: staging
        -s | --sem-ver-regex <regex> default: [0-2].[0-9]+.[x0-9]+
        -d | --commit-depth <1> default: 1
        -r | --release-version <[0-2].[0-9]+.[x0-9]+> default: $(cat version)
    " 1>&2
    exit 1
}

while [ "$#" -gt "0" ]; do
    key="$1"

    case $key in
    -e | --environment)
        environment=$2
        shift # past argument
        shift # past value
        ;;
    -s | --sem-ver-regex)
        semVer=$2
        shift # past argument
        shift # past value
        ;;
    -d | --commit-depth)
        commitDepth=$2
        shift # past argument
        shift # past value
        ;;
    *)
        usage
        shift # past argument
        shift # past value
        ;;
    esac
done

if [ -z "$environment" ]; then usage; fi

function log() {
    echo $(date): $1
}

function get_release_from_commit_message() {
    local environment=$1
    releaseInfo=$(git log -${commitDepth} | grep -Eo "release to $environment: $semVer" || true)
    releaseVersion=$(echo "$releaseInfo" | grep -Eo "$semVer" || true)
}

function materialize_release_branch() {
    local releaseBranchName=$(git ls-remote --heads origin $1 | grep -o "$1" || true)
    local baseBranch=$2

    if [ -z "$releaseBranchName" ]; then
        log "Creating Release Branch"
        git checkout -b $1
    else
        log "base: $2"
        log "Release Branch Exists"
        git checkout $releaseBranchName
        git merge $2
    fi
}

function push() {
    local releaseBranchName=$1

    git push origin $releaseBranchName
}

log "Running knolway" >&1
log "Environment: ${environment}" >&1
log "Semantic Versioning Regex: ${semVer}" >&1

if [ "$environment" == "staging" ]; then
    get_release_from_commit_message $environment
    materialize_release_branch $releaseVersion "develop"
    push $releaseVersion
fi

if [ "$environment" == "production" ]; then
    get_release_from_commit_message $environment
    git tag $releaseVersion
    push $releaseVersion
fi
