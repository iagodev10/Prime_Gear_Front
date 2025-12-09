import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();


  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Carregando...
      </div>
    );
  }

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }


  if (requiredRole) {

    const roleMap = {
      'Administrador': 1,
      'Usuário': 2,
      'Funcionário': 3,
      'Transportadora': 4
    };

  
    let userRole = user.cod_perfil || user.roleId;
    

    if (typeof user.perfil === 'string' && !userRole) {
      userRole = roleMap[user.perfil];
    }

    console.log('==> Verificação de Role:', {
      requiredRole,
      userRole,
      userPerfil: user.perfil,
      userData: user
    });


    if (userRole !== requiredRole) {
     
      if (userRole === 1 || userRole === 3) {
        return <Navigate to="/admin" replace />;
      }
    
      if (userRole === 4) {
        return <Navigate to="/transportadora" replace />;
      }
   
      return <Navigate to="/user" replace />;
    }
  }

  
  return children;
};

export default ProtectedRoute;