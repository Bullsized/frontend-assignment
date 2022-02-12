import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function getTaskFormGroup(): FormGroup {
  return new FormBuilder().group({
    title: ['', [Validators.required]],
    description: [''],
    isComplete: [false]
  });
}
