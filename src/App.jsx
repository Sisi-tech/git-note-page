import './index.css'

function App() {

  return (
    <div className='w-screen bg-black h-screen flex flex-col items-center align-center  text-gray-200 pt-10 m-0'>
      <div className='py-4 text-2xl font-mono'>
        <h2>Git & GitHub</h2>
      </div>
      <div>
        <h2 className='text-xl'>Creating and cloning a repository</h2>
        <ul className='pl-4 py-2'>
          <li>1. Create a new directory: mkdir newFolder</li>
          <li>2. Open new directory: cd newFolder</li>
          <li>3. Clone repository: git clone https-url</li>
        </ul>
        <h2 className='py-2 text-xl'>Example:</h2>
          <p className='pl-4'>
              git % mkdir cloneProject <br />
              git % cd cloneProject <br />
              cloneProject % git clone https://github.com/Sisi-tech/React-Exercise.git<br />
              Cloning into 'React-Exercise'...<br />
              remote: Enumerating objects: 56, done.<br />
              remote: Counting objects: 100% (56/56), done.<br />
              remote: Compressing objects: 100% (43/43), done.<br />
              remote: Total 56 (delta 23), reused 45 (delta 12), pack-reused 0<br />
              Receiving objects: 100% (56/56), 146.57 KiB | 3.26 MiB/s, done.<br />
              Resolving deltas: 100% (23/23), done.<br />
          </p>
      </div>
    </div>
  )
}

export default App
