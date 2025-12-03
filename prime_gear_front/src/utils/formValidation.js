// Funções de máscara para inputs
export const masks = {
  cpf: (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },

  phone: (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  },

  cep: (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  },

  date: (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1');
  },
};

// Funções de validação
export const validators = {
  cpf: (cpf) => {
    const cleanCPF = cpf.replace(/\D/g, '');
    
    if (cleanCPF.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
    
    // Validação dos dígitos verificadores
    let sum = 0;
    let remainder;
    
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
    }
    
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false;
    
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
    }
    
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false;
    
    return true;
  },

  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 11;
  },

  cep: (cep) => {
    const cleanCEP = cep.replace(/\D/g, '');
    return cleanCEP.length === 8;
  },

  date: (date) => {
    const cleanDate = date.replace(/\D/g, '');
    if (cleanDate.length !== 8) return false;
    
    const day = parseInt(cleanDate.substring(0, 2));
    const month = parseInt(cleanDate.substring(2, 4));
    const year = parseInt(cleanDate.substring(4, 8));
    
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if (year < 1900 || year > new Date().getFullYear()) return false;
    
    // Validação de dias por mês
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) return false;
    
    return true;
  },

  required: (value) => {
    return value && value.trim().length > 0;
  },
};

// Mensagens de erro
export const errorMessages = {
  cpf: 'CPF inválido',
  email: 'E-mail inválido',
  phone: 'Telefone inválido',
  cep: 'CEP inválido',
  date: 'Data inválida',
  required: 'Este campo é obrigatório',
  firstName: 'Nome é obrigatório',
  lastName: 'Sobrenome é obrigatório',
  country: 'País é obrigatório',
  state: 'Estado é obrigatório',
  city: 'Cidade é obrigatório',
  street: 'Rua e número são obrigatórios',
  neighborhood: 'Bairro é obrigatório',
};
