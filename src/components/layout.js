import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Header from './header'
import ConsentModal from './consent-modal'
import Footer from './footer'

const Layout = ({ lang, children, smartsuppId, smartsuppTime, names, filtered }) => {
  const domain = 'lacelestina.co'
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  const path = `https://${domain}${url}`;

  return (
    <>
      <ConsentModal lang={lang} />
      <Helmet>
        <html lang={lang} />
        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="La Celestina" />
        <link rel="canonical" href={path}/>
        <meta property='og:url' content={path}/>
        <script>  
          {
            `(function(d, w, c) {
                w.BrevoConversationsID = '${smartsuppId}';
                w[c] = w[c] || function() {
                    (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
          `}
        </script>
      </Helmet>
      <Header lang={lang} names={names} filtered={ !!filtered } />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*

return (
    <>
      <ConsentModal lang={lang} />
      <Helmet>
        <html lang={lang} />
        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="La Celestina" />
        <link rel="canonical" href={path}/>
        <meta property='og:url' content={path}/>
        <script>  
          {
            `var _smartsupp = _smartsupp || {};
            _smartsupp.key = '${smartsuppId}';
            setTimeout(function(){ 
              console.log('')
              window.smartsupp || (function(d) {
                var s,c,o=smartsupp=function() {
                  o._.push(arguments)
                };
                o._=[];
                s=d.getElementsByTagName('script')[0];
                c=d.createElement('script');
                c.type='text/javascript';
                c.charset='utf-8';c.async=true;
                c.src='//www.smartsuppchat.com/loader.js?';
                s.parentNode.insertBefore(c,s);
              })(document);
            }, ${smartsuppTime})
          `}
        </script>
      </Helmet>
      <Header lang={lang} names={names} filtered={ !!filtered } />
      <main>{children}</main>
      <Footer />
    </>
  )
*/
