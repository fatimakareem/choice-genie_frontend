import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-residential-dialog2',
  templateUrl: './residential-dialog2.component.html'
})
export class ResidentialDialog2Component{

    constructor(
        public dialogRef: MatDialogRef<ResidentialDialog2Component>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
