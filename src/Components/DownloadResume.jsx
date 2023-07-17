import { FaEye} from 'react-icons/fa';

const DownloadResume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://docs.google.com/document/d/1tHhkg6gQ3jLwfkqrV2jeTv29uy-Nt4QMIiPKHr1SgFo/edit?usp=sharing'
    downloadLink.download = 'MirHasanresume.pdf'; 
   
    downloadLink.click();
  };

  return (
    <button className='btn btn-secondary my-3' onClick={handleDownload}>Watch Resume <FaEye className='text-xl' /></button>
  );
};

export default DownloadResume;
