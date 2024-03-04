import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(public MatDialogRef: MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      price: [0, [Validators.required]],
    });

    if (this.data) {
      this.myForm.controls['name'].setValue(this.data.name);
      this.myForm.controls['description'].setValue(this.data.description);
      this.myForm.controls['price'].setValue(this.data.price);
    }
  }

  acept(): void {
    if (this.myForm.invalid) {
      this.snakBar('Campos obligatorios para guardar el producto');
      return;
    }

    if (this.data.id) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  cancel(): void {
    this.MatDialogRef.close(false);
  }

  addProduct() {
    this.productService.createProducts(this.getInfoProduct)
      .subscribe({
        next: (_) => {
          this.MatDialogRef.close(true);
        },
        error: () => {
          this.msgError();
        },
      });
  }

  updateProduct() {
    this.productService.updateProducts(this.getInfoProduct)
      .subscribe({
        next: (result) => {
          this.MatDialogRef.close(result);
        },
        error: () => {
          this.msgError();
        },
      });
  }

  private snakBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Aceptar', {
      duration: 2000,
    });
  }

  private msgError() {
    this.snakBar('No se pudo guardar el producto');
  }

  get getInfoProduct(): IProduct {
    return {
      id: this.data.id,
      name: this.myForm.controls['name'].value,
      description: this.myForm.controls['description'].value,
      price: this.myForm.controls['price'].value,
    }
  }

}
