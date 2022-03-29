import Link from 'next/link';
import useUser from 'lib/useUser';
import { useRouter } from 'next/router';
import Image from 'next/image';
import fetchJson from 'lib/fetchJson';

export default function Header() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <header>
      <nav className={``}>
        <div className={`flex justify-center bg-zinc-700 items-center font-light`}>
          <div className={`basis-1/3`}/>
          <div className={`basis-1/3 font-bold text-center text-xl cursor-default text-zinc-100`}>ПАНЕЛЬ УПРАВЛЕНИЯ</div>
          <div className={`basis-1/3 flex justify-end `}>
            <div className={`my-1 py-1 px-2 text-zinc-100 hover:bg-opacity-40 hover:bg-sky-500 rounded-md transition-all`}>
              <Link href='/'>
                <a>На сайт</a>
              </Link>
            </div>
            {user?.isLoggedIn === false && (
              <div className={`my-1 py-1 px-2 text-zinc-100 hover:bg-opacity-60 hover:bg-green-800 rounded-md transition-all`}>
                <Link href='/login'>
                  <a>Войти</a>
                </Link>
              </div>
            )}
            {user?.isLoggedIn === true && (
              <>
                <div className={`my-1 p-1 text-zinc-100 hover:text-zinc-900 hover:bg-red-300 rounded-md transition-all`}>
                  {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href='/api/logout'
                    onClick={async (e) => {
                      e.preventDefault();
                      mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
                      router.push('/login');
                    }}
                  >
                    Выйти
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
