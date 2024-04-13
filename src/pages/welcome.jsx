import './welcome.css';

import boostsCarouselUrl from '../assets/features/boosts-carousel.jpg';
import groupedNotificationsUrl from '../assets/features/grouped-notifications.jpg';
import multiColumnUrl from '../assets/features/multi-column.jpg';
import multiHashtagTimelineUrl from '../assets/features/multi-hashtag-timeline.jpg';
import nestedCommentsThreadUrl from '../assets/features/nested-comments-thread.jpg';
import logoText from '../assets/logo-text.svg';
import logo from '../assets/logo.svg';

import Link from '../components/link';
import states from '../utils/states';
import useTitle from '../utils/useTitle';

const {
  PHANPY_DEFAULT_INSTANCE: DEFAULT_INSTANCE,
  PHANPY_WEBSITE: WEBSITE,
  PHANPY_PRIVACY_POLICY_URL: PRIVACY_POLICY_URL,
  PHANPY_DEFAULT_INSTANCE_REGISTRATION_URL: DEFAULT_INSTANCE_REGISTRATION_URL,
} = import.meta.env;
const appSite = WEBSITE
  ? WEBSITE.replace(/https?:\/\//g, '').replace(/\/$/, '')
  : null;
const appVersion = __BUILD_TIME__
  ? `${__BUILD_TIME__.slice(0, 10).replace(/-/g, '.')}${
      __COMMIT_HASH__ ? `.${__COMMIT_HASH__}` : ''
    }`
  : null;

function Welcome() {
  useTitle(null, ['/', '/welcome']);
  return (
    <main id="welcome">
      <div class="hero-container">
        <div class="hero-content">
          <h1>
            <img
              src={logo}
              alt=""
              width="160"
              height="160"
              style={{
                aspectRatio: '1/1',
                marginBlockEnd: -16,
              }}
            />
            <img src={logoText} alt="Phanpy" width="200" />
          </h1>
          <p class="desc">Phanpy-999</p>
          <p>
            <Link
              to={
                DEFAULT_INSTANCE
                  ? `/login?instance=${DEFAULT_INSTANCE}&submit=1`
                  : '/login'
              }
              class="button"
            >
              {DEFAULT_INSTANCE ? 'Log in' : 'Log in with Mastodon'}
            </Link>
          </p>
          {DEFAULT_INSTANCE && DEFAULT_INSTANCE_REGISTRATION_URL && (
            <p>
              <a href={DEFAULT_INSTANCE_REGISTRATION_URL} class="button plain5">
                Sign up
              </a>
            </p>
          )}
          {!DEFAULT_INSTANCE && (
            <p class="insignificant">
              <small>
                Connect your existing Mastodon/Fediverse account.
                <br />
                Your credentials are not stored on this server.
              </small>
            </p>
          )}
        </div>
        {(appSite || appVersion) && (
          <p class="app-site-version">
            <small>
              {appSite} {appVersion}
            </small>
          </p>
        )}
        <p>
          <big>
            <b>
              <Link to="/login" class="button">
                Log in
              </Link>
            </b>
          </big>
        </p>
        <p class="desc">Grum999's tweaked version</p>
      </div>
    </main>
  );
}

export default Welcome;
