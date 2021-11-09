import React from 'react';

const ProductPlaceholder = () => (
  <div style={{
    padding: '12px 0 16px',
    backgroundColor: 'var(--color-white)',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      margin: '0 16px',
      padding: '0 0 24px',
      borderRadius: 4,
    }}> {/* card */}
      <div style={{ minWidth: 96, height: 96 }} className='shine'> {/* image container */}
        <div> {/* product picture */}
          <div /> {/* product image  */}
        </div>
      </div>
      <div style={{
        marginLeft: 12, flex: '1 1', display: 'flex', flexDirection: 'column',
      }}> {/* product details */}
        <div style={{ height: 16, width: 120 }} className='shine'/> {/* product name */}
        <div style={{ height: 14, width: 48, marginTop: 4 }} className='shine'/> {/* product unit */}
        <div style={{
          display: 'flex',
          marginTop: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}> {/* product price */}
          <span style={{ height: 20, width: 60 }} className='shine'/> {/* product sales */}
          <div style={{ height: 34, width: 86, borderRadius: 4 }} className='shine'/> {/* add to cart */}
        </div>
      </div>
    </div>
  </div>
);

export default ProductPlaceholder;
