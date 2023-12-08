import './index.css'

function App() {

  return (
    <div className='w-screen bg-black h-screen flex flex-col items-center align-center  text-gray-200 pt-10 m-0'>
      <div className='py-4 text-2xl font-mono'>
        <h2>Git & GitHub</h2>
      </div>
      <div>
        <h2 className='text-xl'>Creating and cloning a repository -- git clone</h2>
        <ul className='pl-4 py-2'>
          <li>1. Create a new directory: mkdir newFolder</li>
          <li>2. Open new directory: cd newFolder</li>
          <li>3. Clone repository: git clone https-url</li>
        </ul>
        <h2 className='text-xl'>Example:</h2>
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
      <div className=''>
        <h2 className='text-xl pt-4 pl-0'>git blame</h2>
        <ul className='pl-4 py-2'>
          <li>1. Open newFolder - cd folder</li>
          <li>2. List items from folder - ls -l</li>
          <li>3. git blame file.jsx</li>
        </ul>
        <h2 className='py-2 text-xl'>Example:</h2>
          <p className='pl-4'>
            (base) sisiwang@Sisis-MBP gitNotePage % ls -l <br />
            total 376 <br />
            -rw-r--r--    1 sisiwang  staff     451 Dec  8 06:31 README.md <br />
            -rw-r--r--    1 sisiwang  staff     361 Dec  8 06:31 index.html<br />
            drwxr-xr-x  271 sisiwang  staff    8672 Dec  8 06:47 node_modules<br />
            -rw-r--r--    1 sisiwang  staff  165968 Dec  8 06:47 package-lock.json<br />
            -rw-r--r--    1 sisiwang  staff     733 Dec  8 06:47 package.json<br />
            -rw-r--r--    1 sisiwang  staff      80 Dec  8 06:47 postcss.config.js<br />
            drwxr-xr-x    3 sisiwang  staff      96 Dec  8 06:31 public<br />
            drwxr-xr-x    6 sisiwang  staff     192 Dec  8 06:32 src<br />
            -rw-r--r--    1 sisiwang  staff     183 Dec  8 06:47 tailwind.config.js<br />
            -rw-r--r--    1 sisiwang  staff     163 Dec  8 06:31 vite.config.js<br />
            (base) sisiwang@Sisis-MBP gitNotePage % cd src<br />
            (base) sisiwang@Sisis-MBP src % ls -l<br />
            total 24<br />
            -rw-r--r--  1 sisiwang  staff  1368 Dec  8 07:02 App.jsx<br />
            drwxr-xr-x  2 sisiwang  staff    64 Dec  8 06:32 assets<br />
            -rw-r--r--  1 sisiwang  staff    58 Dec  8 06:46 index.css<br />
            -rw-r--r--  1 sisiwang  staff   235 Dec  8 06:31 main.jsx<br />
            (base) sisiwang@Sisis-MBP src % git blame App.jsx<br />
          </p>
      </div>
    </div>
  )
}

export default App
