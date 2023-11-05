import SearchBar from '../../components/SearchBar';
import FolderList from '../../components/Folder/FolderList';
import FileList from '../../components/File/FileList';


export default function Home() {
  return (

      <div className='p-5'>
        <SearchBar/>
        <FolderList folderList={folderList}/>
        <FileList fileList={fileList} />
      </div>

  );
}
