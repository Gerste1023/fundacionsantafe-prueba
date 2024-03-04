import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from 'src/app/core/interfaces/product.interface';
import { ModalProductComponent } from '../modals/modal-product/modal-product.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions'];
  listProducts: IProduct[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<IProduct>;

  constructor(public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private productService: ProductService) {
    this.dataSource = new MatTableDataSource(this.listProducts);
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData() {
    this.productService.getAllProducts()
      .subscribe({
        next: (data) => {
          this.listProducts = data;
          this.dataSource = new MatTableDataSource(this.listProducts);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          this.msgError();
        },
      });
  }

  addData() {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      data: '',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
      }
    });
  }

  editData(data: IProduct) {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      data,
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
      }
    });
  }

  deleteData(data: IProduct) {
    this.productService.deleteProducts(data.id)
      .subscribe({
        next: (result) => {
          if (result) {
            this.snakBar('producto borrado satisfactoriamente');
            this.loadData();
          } else {
            this.snakBar('no se pudo borrar el producto');
          }
        },
        error: () => {
          this.msgError();
        },
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private snakBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Aceptar', {
      duration: 2000,
    });
  }

  private msgError() {
    this.snakBar('No se encontro información');
  }
}
