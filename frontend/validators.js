// Validadores para formulários
// Uso: validators.email('test@example.com') → { valid: true/false, error: '' }

const validators = {
  // Email validation
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return { valid: false, error: 'Email é obrigatório' };
    if (!emailRegex.test(value)) return { valid: false, error: 'Email inválido' };
    return { valid: true, error: '' };
  },

  // CPF/CNPJ validation
  doc: (value, type = 'ANY') => {
    if (!value) return { valid: false, error: 'Documento é obrigatório' };

    const cleanDoc = value.replace(/\D/g, '');

    if (type === 'PF' || type === 'ANY') {
      if (cleanDoc.length === 11) {
        if (validators._isValidCPF(cleanDoc)) {
          return { valid: true, error: '' };
        }
      }
    }

    if (type === 'PJ' || type === 'ANY') {
      if (cleanDoc.length === 14) {
        if (validators._isValidCNPJ(cleanDoc)) {
          return { valid: true, error: '' };
        }
      }
    }

    return { valid: false, error: 'Documento inválido (CPF ou CNPJ)' };
  },

  // Name validation
  name: (value, minLength = 3) => {
    if (!value) return { valid: false, error: 'Nome é obrigatório' };
    if (value.trim().length < minLength) {
      return { valid: false, error: `Nome deve ter no mínimo ${minLength} caracteres` };
    }
    if (!/^[a-záàâãéèêíïóôõöúçñA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s'-]+$/.test(value)) {
      return { valid: false, error: 'Nome contém caracteres inválidos' };
    }
    return { valid: true, error: '' };
  },

  // Phone validation
  phone: (value) => {
    if (!value) return { valid: false, error: 'Telefone é obrigatório' };
    const cleanPhone = value.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return { valid: false, error: 'Telefone deve ter 10 ou 11 dígitos' };
    }
    return { valid: true, error: '' };
  },

  // Password validation
  password: (value, minLength = 6) => {
    if (!value) return { valid: false, error: 'Senha é obrigatória' };
    if (value.length < minLength) {
      return { valid: false, error: `Senha deve ter no mínimo ${minLength} caracteres` };
    }
    // Check for complexity (opcional)
    // if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
    //   return { valid: false, error: 'Senha deve conter maiúsculas, minúsculas e números' };
    // }
    return { valid: true, error: '' };
  },

  // Required field
  required: (value, fieldName = 'Campo') => {
    if (!value || value.toString().trim() === '') {
      return { valid: false, error: `${fieldName} é obrigatório` };
    }
    return { valid: true, error: '' };
  },

  // Number validation
  number: (value, min = null, max = null) => {
    if (value === '' || value === null) return { valid: false, error: 'Número é obrigatório' };
    const num = parseFloat(value);
    if (isNaN(num)) return { valid: false, error: 'Valor deve ser um número' };
    if (min !== null && num < min) return { valid: false, error: `Mínimo: ${min}` };
    if (max !== null && num > max) return { valid: false, error: `Máximo: ${max}` };
    return { valid: true, error: '' };
  },

  // Date validation
  date: (value) => {
    if (!value) return { valid: false, error: 'Data é obrigatória' };
    const date = new Date(value);
    if (isNaN(date.getTime())) return { valid: false, error: 'Data inválida' };
    return { valid: true, error: '' };
  },

  // URL validation
  url: (value) => {
    if (!value) return { valid: false, error: 'URL é obrigatória' };
    try {
      new URL(value);
      return { valid: true, error: '' };
    } catch {
      return { valid: false, error: 'URL inválida' };
    }
  },

  // Validate entire form
  validateForm: (data, schema) => {
    const errors = {};
    let isValid = true;

    for (const [field, rule] of Object.entries(schema)) {
      const value = data[field];
      const result = rule(value);
      if (!result.valid) {
        errors[field] = result.error;
        isValid = false;
      }
    }

    return { isValid, errors };
  },

  // Helper functions
  _isValidCPF: (cpf) => {
    if (cpf === cpf.charAt(0).repeat(11)) return false;
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
  },

  _isValidCNPJ: (cnpj) => {
    if (cnpj === cnpj.charAt(0).repeat(14)) return false;
    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;
    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result === parseInt(digits.charAt(1));
  }
};
