import React, { useState } from 'react';
import * as S from './styles';

const addressInitialState = {
  name: '',
  longitude: '',
  latitude: '',
  address: '',
  locality: '',
  city: '',
  state: '',
  pincode: '',
  phone: '',
  isDefault: false,
};

const AddAddress = () => {
  const [addressObject, setAddressObject] = useState(addressInitialState);

  const changeHandler = (type) => (e) => {
    const { value } = e.target;
    setAddressObject({ ...addressObject, [type]: value });
  };

  return (
    <S.Form onSubmit={() => {}}>
      <S.FormInput
        name='name'
        onChange={changeHandler('name')}
        placeholder='Name'
        value={addressObject.name || ''}
      />
      <S.FormInput
        type='tel'
        name='phone'
        onChange={changeHandler('phone')}
        placeholder='Mobile number'
        maxLength={'10'}
        value={addressObject.phone || ''}
        required
      />

      <S.FormInput
        name='pincode'
        onChange={changeHandler('pincode')}
        placeholder='Pincode'
        value={addressObject.pincode || ''}
        required
      />
      <S.FormInput
        name='state'
        onChange={changeHandler('state')}
        placeholder='State'
        value={addressObject.state || ''}
        required
      />
      <S.FormInput
        name='address'
        onChange={changeHandler('address')}
        placeholder='Address (House No., Building, Street, Area)'
        value={addressObject.address || ''}
        required
      />
      <S.FormInput
        name='locality'
        onChange={changeHandler('locality')}
        placeholder='Locality/Town'
        value={addressObject.locality || ''}
      />
      <S.FormInput
        name='city'
        onChange={changeHandler('city')}
        placeholder='City'
        value={addressObject.city || ''}
        required
      />

      <S.FormInputCheckbox
        type='checkbox'
        onChange={changeHandler('isDefault')}
        name='isDefault'
        checked={addressObject.isDefault || false}
      />
      <label htmlFor='isDefault'>Make this as default address</label>
    </S.Form>
  );
};

export default AddAddress;
