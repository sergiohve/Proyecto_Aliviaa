import { useState } from 'react';
import { useRouter } from 'next/router';
import PageContainer from '../../components/page-container';
import Link from 'next/link';
import { SIGN_IN } from '../../apollo/client/mutations';
import { useMutation, useApolloClient } from '@apollo/client';
import { getErrorMessage } from '../../lib/form';

import AlertError from '../../components/alerts/error';
import Button from '../../components/form/button';
import Input from '../../components/form/input';
import InputContainer from '../../components/form/InputContainer';
import FormContainer from '../../components/form/formContainer';

export default function Login() {
 

  return (
    <PageContainer title="Quantum E-commerce - Login">
      <FormContainer>
        <form >
          <h3 className="formTitle">Login</h3>

         

          <InputContainer>
            <Input
              type="email"
              name="email"
              placeholder="Correo"
             
              
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
            
            />

            <Button type="submit" title="Login" />
          </InputContainer>
        </form>

        <Link href="/user/signup">
          <a className="switchForm">Crear una cuenta</a>
        </Link>
        <Link href="/user/resetpassword">
          <a className="switchForm">Se me olvido la contraseña</a>
        </Link>
      </FormContainer>

      <style jsx>{`
        form {
          width: 100%;
          align-items: center;
        }
        form .formTitle {
          text-align: center;
          font-size: 38px;
          font-weight: 1000;
          letter-spacing: 1.65px;
          color: #b2b2b2;
          text-transform: uppercase;
          margin-bottom: 84px;
        }
        .switchForm {
          color: #b2b2b2;
          margin-top: 12px;
          font-weight: 500;
        }
      `}</style>
    </PageContainer>
  );
}
