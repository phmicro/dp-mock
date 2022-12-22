import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FakeAPIService } from 'src/app/fake-api.service';
import { FakeData } from 'src/app/fakeData';
import { NumberValidators } from 'src/app/number.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  form!: FormGroup
  fakeData$!: Observable<FakeData | null>;

  testFakeData!: FakeData;

  constructor(private formBuilder: FormBuilder, private apiService: FakeAPIService){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, NumberValidators.range(1,5)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    })
  }

  saveForm(){
    console.log(this.form.value)
    this.apiService.createEntry({id: 1, description: "test"})
    return null;
  }

}
