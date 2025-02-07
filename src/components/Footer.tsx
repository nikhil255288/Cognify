/**
 * @copyright 2024 Nikhil Teja
 * @license Apache-2.0
 */

/**
 * Components
 */
import Logo from '@/components/Logo';

/**
 * Constants
 */
import { footerData } from '@/constants';

const Footer = () => {
  return (
    <footer className='section !pb-0'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4'>
          <Logo />

          <div className='grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3'>
            {footerData.links.map(({ title, items }, index) => (
              <ul key={index}>
                <p className='mb-4'>{title}</p>

                {items.map(({ href, label }, index) => (
                  <li
                    key={index}
                    className='text-muted-foreground'
                  >
                    <a
                      href={href}
                      className='inline-block py-1 transition-colors hover:text-primary'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className='flex justify-between mt-12 border-t border-gray-600/10 py-6'>
          <a
            href='https://nikhil-developer.netlify.app/'  // 🔹 Replace with your portfolio or relevant website link
            target='_blank'
            className=''
            rel="noreferrer noopener"
          >
            © 2024 Nikhil Teja. All Rights Reserved.
          </a>

          <div>
            <ul className='flex gap-5'>
              {/* 🔹 Replace "YOUR_SOCIAL_LINKS" with actual links */}
              <li>
                <a href='https://www.linkedin.com/in/payyaula-nikhil-teja/?originalSubdomain=in' target='_blank' rel="noreferrer noopener">
                  {/* Add LinkedIn icon here */}
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='https://github.com/nikhil255288' target='_blank' rel="noreferrer noopener">
                  {/* Add GitHub icon here */}
                  GitHub
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
