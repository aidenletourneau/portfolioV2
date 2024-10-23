export default function ResumePage() {
  return (
    <>
      <div className='info-region'>
        <object
          data='/assets/Letourneau_Aiden_Resume.pdf'
          type='application/pdf'
          width='75%'
          height='800px'
        />
      </div>
      <a
        className='download-link'
        href='/assets/Letourneau_Aiden_Resume.pdf'
        download>
        Download
      </a>
    </>
  );
}
