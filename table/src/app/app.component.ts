import {Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import {AppComponentDialog} from './your-dialog/your-dialog.component'
import {MatInputModule} from '@angular/material/input';

export interface table {
  name: string;
  position: number;
  mobile : number;
  email: string;
}

const ELEMENT_DATA: table[] = [
  {position: 1, name: 'Vejay', mobile : 8527410658, email: 'vejay@gmail.com'},
  {position: 2, name: 'Riyas', mobile :7854123659,email: 'riyo@gmail.com'},
  {position: 3, name: 'Karthik', mobile : 7895258203, email: 'karthik@gmail.com'},
  {position: 4, name: 'Santhosh',mobile :9875467892, email: 'santo@gmail.com'},
  {position: 5, name: 'Selva', mobile : 6784125896, email: 'selva@gmail.com'},
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }
 
  openDialog(_event: any) {
    const dialogRef = this.dialog.open(AppComponentDialog);
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      



    });
  }

  displayedColumns: string[] = ['position', 'name', 'mobile ', 'email','edit','delete'];
  dataSource = [...ELEMENT_DATA];


  @ViewChild(MatTable)
  table!: MatTable<table>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
    
  }


  }



