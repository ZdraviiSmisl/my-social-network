import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export {RouteGuard};

const LOGGED_IN = false;

function RouteGuard({children}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);
    //для первичной загрузки
    // в начале смены маршрута - скрыть содержимое страницы,
    // установив авторизованное значение false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // по завершении смены маршрута - запускаем проверку авторизации
    router.events.on("routeChangeComplete", authCheck);
    // отписаться от событий в функции возврата
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck)
    }
  }, []);

  function authCheck(url) {
    // перенаправление на страницу логина, если вы обращаетесь к
    // приватной странице и не авторизованы
    const publicPaths = ["/login"];
    const path = url.split("?")[0];
    if (!LOGGED_IN && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: {returnUrl: router.asPath}
      });
    } else {
      setAuthorized(true);
    }
  }

  return (authorized && children);
}