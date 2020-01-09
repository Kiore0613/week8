import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordsValidator(group: FormGroup): ValidationErrors | null {
  const password = group.get('credentialForm.password');
  const confirmPassword = group.get('confirmPassword');

  if (!(password.value === confirmPassword.value)) {
    return { notMatch: true };
  }

  return null;
}
