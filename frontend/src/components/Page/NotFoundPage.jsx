import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../utils/routes';
import error from '../../assets/404.svg';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-5">
      <img
        src={ error }
        alt={t('notFoundPage.logoAlt')}
        className="img-fluid h-25 rounded-circle"
      />
      <h1 className="h4 text-muted">{t('notFoundPage.title')}</h1>
      <p>
        {t('notFoundPage.text')} <Link to={routes.mainPagePath()}>{t('notFoundPage.link')}</Link>
      </p>
    </div>
  );
};
