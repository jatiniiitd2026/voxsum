import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {jsPDF} from "jspdf";
import {ToastrService} from "ngx-toastr";
import {DataService} from "@data/services/data.service";
import {StorageService} from "@core/services/storage.service";
import {RegistrationAPIResponseModel} from "@data/schema/register.model";
import {AppConstants} from "@core/constants/app-constants";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PaginationModel} from "@data/schema/pagination.model";
import {UploadLimitResponseModel} from "@data/schema/upload-receipt-popup.model";
import {LoggedService} from "@data/services/logged.service";
import {MatDialog} from "@angular/material/dialog";
import {UploadReceiptPopupComponent } from "@modules/upload-receipt/upload-receipt-popup/upload-receipt-popup.component";


@Component({
    selector: 'app-upload-receipt',
    templateUrl: './upload-receipt.component.html',
    styleUrls: ['./upload-receipt.component.scss']
})
export class UploadReceiptComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['submissionDate', 'status'];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    numberOfFiles: number = 1;
    formSubmitted: boolean = false;
    language: string = 'en';
    files: File[] = [];
    filePdf: [File] | [] = [];
    maxFileSize: number = 5000000;
    isPdf: boolean = false;
    userDetails!: RegistrationAPIResponseModel;
    userEmail: string = '';
    ELEMENT_DATA!: PaginationModel[];
    dataSource = new MatTableDataSource<PaginationModel>(this.ELEMENT_DATA);
    receiptsSubmitted:boolean = false;
    uploadAllowed: boolean = true;

    constructor(private toast: ToastrService,
                private dataService: DataService,
                private router: Router,
                private storageService: StorageService,
                private loggedService: LoggedService,
                public dialog: MatDialog) {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit(): void {
        this.userDetails = JSON.parse(this.storageService.getItemFromSessionStorage('user'));
        if (this.userDetails !== null || undefined) {
            this.userEmail = this.userDetails.email;
            this.dataService.uploadReceiptLimit(this.userEmail).subscribe((response: UploadLimitResponseModel)=>{
                if(response.isSent){
                    this.uploadAllowed = false;
                    const dialogRef = this.dialog.open(UploadReceiptPopupComponent, {
                        panelClass: 'popup-modal',
                        autoFocus: false,
                        data: 'Sorry! You have reached the program limit for rewards'
                    });
                }
            });
        }
        this.getSubmittedReceipts();
    }

    getSubmittedReceipts(){
        this.loggedService.fetchReceiptDetails(this.userEmail).subscribe(response => {
            this.ELEMENT_DATA = response;
            this.dataSource = new MatTableDataSource<PaginationModel>(this.ELEMENT_DATA);
            if(this.ELEMENT_DATA.length > 0){
                this.receiptsSubmitted = true;
            }
        },error => {
            this.toast.error(error);
            console.error(error)
        });
    }
    redirect(path: string, fragment?: string) {
        this.router.navigate([path], {fragment: fragment})
    }

    onSelect(event: any) {
        try {
            for (let i = 0; i < event.addedFiles.length; i++) {
                if (event.addedFiles[i].type === 'application/pdf') {
                    event.addedFiles = [event.addedFiles[i]];
                    break
                }
            }
            if (event.addedFiles[0].type === 'application/pdf') {
                this.files = [event.addedFiles[0]];
                this.isPdf = true;
            } else {
                if (this.isPdf) this.onRemovePdf()
                this.files.push(...event.addedFiles);
            }
            if (this.files.length > this.numberOfFiles) {
                this.files = this.files.slice(0, this.numberOfFiles);
                this.toast.error(this.language === 'en' ? AppConstants.imgLimit : '')
            }
            if (event.rejectedFiles.length > 0) {
                if (event.rejectedFiles[0].reason === 'size') {
                    this.toast.error(this.language === 'en' ? AppConstants.imgSize : '')
                }
            }
        } catch (err) {
            this.toast.error(AppConstants.fileType);
        }

    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }

    onRemovePdf() {
        this.files = [];
        this.isPdf = false;
    }

    handleUpload() {
        // No Image
        if (this.files.length === 0) {
            return;
        }
        this.formSubmitted = true;
        // Single Image
        if (this.files.length === 1) {
            this.uploadReceiptImage();
            return
        }
        this.convertToPdf();
    }

    uploadReceiptImage() {
        this.dataService.uploadReceipt(this.files[0], this.userEmail).subscribe((value) => {
            this.files = [];
            this.formSubmitted = false;
            this.handleResponse(value);
        }, error => {
            this.files = [];
            console.error(error);
            this.formSubmitted = false;
            this.toast.error("Something went wrong please try again later.");
        })
    }

    uploadReceiptPdf(pdf: Blob) {
        this.dataService.uploadPdf(pdf, this.userEmail).subscribe((value) => {
            this.files = [];
            this.formSubmitted = false;
            this.handleResponse(value);
        }, error => {
            this.files = [];
            console.error(error);
            this.formSubmitted = false;
            this.toast.error("Something went wrong please try again later.");
        })
    }

    handleResponse(response: any) {
        if (response.hasOwnProperty('error')) {
            this.toast.error(response.error);
            setTimeout(() => {
                this.router.navigate(['/home']);
            }, 2000)
        } else {
            this.toast.success('Your receipt has been Submitted Successfully. Thanks')
            this.getSubmittedReceipts();
        }
    }

    convertToPdf() {
        let document = new jsPDF('p', 'mm', 'a4', true);
        let imageCount = 0;
        const base64ImgArray = [];

        // These three lines throwing error Argument type 'Promise<any>' is not assignable to parameter type 'never'
        // for (let i = 0; i < this.files.length; i++) {
        //     base64ImgArray.push(this.getBase64(this.files[i]).then((value) => value));
        // }

        Promise.all(base64ImgArray).then(values => {
            values.forEach((value, index) => {
                document.addImage(value, 'JPEG', 15, 20, 180, 160);
                imageCount++;
                if (index < this.files.length - 1) {
                    document.addPage();
                }
            });

            if (imageCount === this.files.length) {
                this.uploadReceiptPdf(document.output('blob'));
            }
        }).catch((err) => {
            console.error(err);
            this.toast.error('The image you chose is not compatible with our system.')
        });
    }

    getBase64(file: File) {
        return new Promise<any>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = err => reject(err)
        });
    }

}
