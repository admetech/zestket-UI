import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from 'src/web/components/atoms/icons';
import Main from 'src/web/components/templates/main';
import AddAddress from './AddAddress';
import * as S from './styles';

const Address = () => {
  const history = useHistory();
  const [showAddressModal, setShowAddressModal] = useState(false);

  return (
    <Fragment>
      <S.Container>
        <S.SubContainer>
          <S.GoBackAndTitle>
            <S.GoBack onClick={() => history.goBack()}>
              <Icon name='goback' width='24px' height='24px' />
            </S.GoBack>
            <S.HeaderTitle>My Account</S.HeaderTitle>
          </S.GoBackAndTitle>
        </S.SubContainer>
      </S.Container>

      <Main>
        <S.AddAddressButton onClick={() => setShowAddressModal(!showAddressModal)}>
          {!showAddressModal ? '+ ' : ''}Add new address
        </S.AddAddressButton>
        {showAddressModal ? (
          <AddAddress />
        ) : (
          <S.AddressViewList></S.AddressViewList>
        )}
      </Main>
    </Fragment>
  );
};

export default Address;
