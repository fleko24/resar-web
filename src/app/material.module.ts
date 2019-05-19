import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule,
         MatRadioModule,
         MatCheckboxModule,
         MatProgressSpinnerModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule,
         MatDialogModule,
         MatCardModule,
         MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}
