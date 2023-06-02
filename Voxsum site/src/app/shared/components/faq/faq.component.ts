import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";
import {FaqDataModel} from "@data/schema/faq.model";

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
    panelOpenState: Boolean = false;
    faqData: FaqDataModel[] = [
        {
            question: "What is the purpose of the chrome extension?",
            answer: "The chrome extension aims to enhance the online meeting experience by providing automated speech-to-text conversion, summary generation, and visualization of key information and insights."
        },
        {
            question: "How does the extension access audio from online meetings?",
            answer: "The extension utilizes appropriate APIs and permissions to access the audio input from the meeting platform, allowing it to capture and record the speech during the online meeting."
        },
        {
            question: "What technology is used to convert speech to text?",
            answer: "The extension employs advanced Natural Language Processing (NLP) techniques and a speech-to-text conversion module to convert the recorded speech into text format, ensuring accurate and efficient transcription."        },
        {
            question: "How does the ChatGPT model generate a summary?",
            answer: "The text data obtained from the speech-to-text conversion is passed to the ChatGPT model, which utilizes state-of-the-art natural language processing and deep learning techniques. The model comprehends the content and generates a concise summary based on the input text."
        },
        {
            question: "What kind of information and insights are extracted from the generated summary?",
            answer: "The generated summary is processed to extract key information, relevant insights, and important details from the original content. This extraction allows users to quickly grasp the main points and obtain valuable takeaways from the meeting."
        },
        {
            question: "How is the extracted information visualized?",
            answer: "The extension employs various visualization techniques, including pie charts and other suitable graphical representations, to present the extracted information in a visually appealing and easy-to-understand manner."
        }
    ]

    @ViewChild('myAccordion') myPanels!: MatAccordion;

    openAll() {
        this.myPanels.openAll();
        this.panelOpenState = true;
    }

    closeAll() {
        this.myPanels.closeAll();
        this.panelOpenState = false;
    }
}

