import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiX } from "react-icons/fi";

const ModalEditarTransportadora = ({ isVisivel, onClose, transportadora, id }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [precoPorKm, setPrecoPorKm] = useState("");
  const [taxaFixa, setTaxaFixa] = useState("");
  const [precoPorKg, setPrecoPorKg] = useState("");
  const [fatorCubagem, setFatorCubagem] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [errors, setErrors] = useState({});
  const [loadingCEP, setLoadingCEP] = useState(false);

  const styles = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px',
      backdropFilter: 'blur(2px)'
    },
    modalContent: {
      background: '#f5f5f5',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '700px',
      maxHeight: '90vh',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid #e0e0e0',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10
    },
    modalHeaderTitle: {
      margin: 0,
      fontSize: '1.4rem',
      fontWeight: 600,
      color: '#333'
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      fontSize: '1.5rem',
      color: '#666',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.2s',
      padding: '4px',
      borderRadius: '50%'
    },
    form: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '0.95rem',
      fontWeight: 600,
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: '0.3s',
      backgroundColor: '#fff',
      boxSizing: 'border-box'
    },
    inputFocused: {
      outline: 'none',
      borderColor: '#000',
      boxShadow: '0 0 0 2px rgba(0,0,0,0.1)'
    },
    errorText: {
      color: '#d32f2f',
      fontSize: '0.85rem',
      marginTop: '-4px'
    },
    gridItem: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    submitButton: {
      width: '100%',
      padding: '14px',
      background: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      marginTop: '10px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    },
    smallText: {
      color: '#666',
      fontSize: '0.75rem'
    }
  };


  const maskCEP = (value) => {
    if (!value) return "";
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9);
  };

  const maskCNPJ = (value) => {
    if (!value) return "";
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18);
  };

  const maskTelefone = (value) => {
    if (!value) return "";
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  
  useEffect(() => {
    if (transportadora) {
      setNome(transportadora.nome_transp || "");
      setEmail(transportadora.email_transp || "");
      
      const telLimpo = transportadora.telefone_transp ? String(transportadora.telefone_transp) : "";
      setTelefone(maskTelefone(telLimpo));
      
      const cepLimpo = transportadora.cep_transp ? String(transportadora.cep_transp) : "";
      setCep(maskCEP(cepLimpo));
      
      const cnpjLimpo = transportadora.cnpj_transp ? String(transportadora.cnpj_transp) : "";
      setCnpj(maskCNPJ(cnpjLimpo));
      
      setPrecoPorKm(transportadora.preco_por_km_transp || "");
      setTaxaFixa(transportadora.taxa_fixa || "");
      setPrecoPorKg(transportadora.preco_por_kg || "");
      setFatorCubagem(transportadora.fator_cubagem || "");
      setLatitude(transportadora.latitude_transp || "");
      setLongitude(transportadora.longitude_transp || "");
  
    }
  }, [transportadora]);

  const validar = () => {
    const e = {};

    console.log('🔍 Validando campos...', {
      nome,
      email,
      cnpj: cnpj.replace(/\D/g, ''),
      telefone: telefone.replace(/\D/g, ''),
      cep: cep.replace(/\D/g, ''),
      precoPorKm,
      taxaFixa,
      precoPorKg,
      fatorCubagem,
      latitude,
      longitude
    });

    if (!nome.trim()) {
      console.log('❌ Nome vazio');
      e.nome = "Informe o nome";
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      console.log('❌ Email inválido:', email);
      e.email = "E-mail inválido";
    }
    
    if (cnpj.replace(/\D/g, '').length !== 14) {
      console.log('❌ CNPJ inválido. Tamanho:', cnpj.replace(/\D/g, '').length);
      e.cnpj = "CNPJ inválido";
    }
    
    const telDigits = telefone.replace(/\D/g, '');
    if (telDigits.length < 10 || telDigits.length > 11) {
      console.log('❌ Telefone inválido. Tamanho:', telDigits.length);
      e.telefone = "Telefone inválido";
    }
    
    if (cep.replace(/\D/g, '').length !== 8) {
      console.log('❌ CEP inválido. Tamanho:', cep.replace(/\D/g, '').length);
      e.cep = "CEP inválido";
    }

    if (!precoPorKm || isNaN(parseFloat(precoPorKm)) || parseFloat(precoPorKm) < 0) {
      console.log('❌ Preço por km inválido:', precoPorKm);
      e.precoPorKm = "Preço por km inválido";
    }
    
    if (!taxaFixa || isNaN(parseFloat(taxaFixa)) || parseFloat(taxaFixa) < 0) {
      console.log('❌ Taxa fixa inválida:', taxaFixa);
      e.taxaFixa = "Taxa fixa inválida";
    }
    
    if (!precoPorKg || isNaN(parseFloat(precoPorKg)) || parseFloat(precoPorKg) < 0) {
      console.log('❌ Preço por kg inválido:', precoPorKg);
      e.precoPorKg = "Preço por kg inválido";
    }
    
    if (!fatorCubagem || isNaN(parseFloat(fatorCubagem)) || parseFloat(fatorCubagem) <= 0) {
      console.log('❌ Fator de cubagem inválido:', fatorCubagem);
      e.fatorCubagem = "Fator de cubagem inválido";
    }

    setErrors(e);
    
    const isValid = Object.keys(e).length === 0;
    console.log(isValid ? '✅ Validação passou!' : '❌ Validação falhou:', e);
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;

    const transportadoraAtualizada = {
      nome_transp: nome.trim(),
      email_transp: email.trim(),
      telefone_transp: telefone.replace(/\D/g, ''),
      cep_transp: cep.replace(/\D/g, ''),
      cnpj_transp: cnpj.replace(/\D/g, ''),
      preco_por_km_transp: parseFloat(precoPorKm),
      taxa_fixa: parseFloat(taxaFixa),
      preco_por_kg: parseFloat(precoPorKg),
      fator_cubagem: parseFloat(fatorCubagem),
      latitude_transp: parseFloat(latitude),
      longitude_transp: parseFloat(longitude)
    };

    console.log("Atualizando transportadora:", transportadoraAtualizada);

    try {
      const response = await axios.put(
        `http://localhost:8080/update-transportadora/${id}`,
        transportadoraAtualizada,
        {
          withCredentials: true
        }
      );

      console.log("Transportadora atualizada com sucesso:", response.data);
      
      window.location.reload();
    } catch (error) {
      console.error("Erro ao atualizar transportadora:", error);
      alert(error.response?.data?.message || "Erro ao atualizar transportadora");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisivel) return null;

  return (
    <div style={styles.modalOverlay} onClick={handleOverlayClick}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalHeaderTitle}>Editar Transportadora</h2>
          <button 
            style={styles.closeButton}
            onClick={onClose}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#eee';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#666';
            }}
          >
            <FiX size={24} />
          </button>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Nome da Transportadora */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="nome">Nome da Transportadora *</label>
            <input
              style={styles.input}
              type="text"
              id="nome"
              placeholder="Digite o nome da transportadora"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onFocus={(e) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#000';
                e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.nome && <span style={styles.errorText}>{errors.nome}</span>}
          </div>

          {/* Email */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email *</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#000';
                e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          {/* CNPJ e Telefone */}
          <div style={styles.gridItem}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="cnpj">CNPJ *</label>
              <input
                style={styles.input}
                type="text"
                id="cnpj"
                placeholder="00.000.000/0000-00"
                value={cnpj}
                onChange={(e) => setCnpj(maskCNPJ(e.target.value))}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.cnpj && <span style={styles.errorText}>{errors.cnpj}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="telefone">Telefone *</label>
              <input
                style={styles.input}
                type="tel"
                id="telefone"
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(e) => setTelefone(maskTelefone(e.target.value))}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.telefone && <span style={styles.errorText}>{errors.telefone}</span>}
            </div>
          </div>

          {/* CEP */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="cep">
              CEP * {loadingCEP && "(Buscando coordenadas...)"}
            </label>
            <input
              style={styles.input}
              type="text"
              id="cep"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => {
                const cepFormatado = maskCEP(e.target.value);
                setCep(cepFormatado);
              }}
              onFocus={(e) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#000';
                e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.cep && <span style={styles.errorText}>{errors.cep}</span>}
          </div>

          {/* Preços e Taxas */}
          <div style={styles.gridItem}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="preco_km">Preço por Km (R$) *</label>
              <input
                style={styles.input}
                type="number"
                id="preco_km"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={precoPorKm}
                onChange={(e) => setPrecoPorKm(e.target.value)}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.precoPorKm && <span style={styles.errorText}>{errors.precoPorKm}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="taxa_fixa">Taxa Fixa (R$) *</label>
              <input
                style={styles.input}
                type="number"
                id="taxa_fixa"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={taxaFixa}
                onChange={(e) => setTaxaFixa(e.target.value)}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.taxaFixa && <span style={styles.errorText}>{errors.taxaFixa}</span>}
            </div>
          </div>

          <div style={styles.gridItem}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="preco_kg">Preço por Kg (R$) *</label>
              <input
                style={styles.input}
                type="number"
                id="preco_kg"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={precoPorKg}
                onChange={(e) => setPrecoPorKg(e.target.value)}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.precoPorKg && <span style={styles.errorText}>{errors.precoPorKg}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="fator_cubagem">Fator de Cubagem *</label>
              <input
                style={styles.input}
                type="number"
                id="fator_cubagem"
                placeholder="300"
                step="1"
                min="1"
                value={fatorCubagem}
                onChange={(e) => setFatorCubagem(e.target.value)}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.fatorCubagem && <span style={styles.errorText}>{errors.fatorCubagem}</span>}
              <small style={styles.smallText}>
                Fator padrão: 300 (1m³ = 300kg)
              </small>
            </div>
          </div>

          <button 
            style={styles.submitButton}
            type="submit"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarTransportadora;