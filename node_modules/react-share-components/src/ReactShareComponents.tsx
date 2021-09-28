import * as React from 'react';
import QRCode, { SvgQRCodeProps, CanvasQRCodeProps } from 'qrcode.react';
import './reactShareComponents.scss';

export declare const TShareSites: [
  'weibo',
  'qq',
  'wechat',
  'douban',
  'qzone',
  'linkedin',
  'facebook',
  'twitter',
  'google'
];
export type ShareSitesTypes = typeof TShareSites[number];
export type ShareSitesTypesGroup = ShareSitesTypes[];
export interface ShareProps {
  url: string;
  title: string;
  description: string;
  source: string;
  summary: string;
  image: string;
  sites: ShareSitesTypesGroup;
  disabled: ShareSitesTypesGroup;
  origin: string;
  weiboKey: string;
  wechatQrcodeTitle: React.ReactNode;
  wechatQrcodeHelper: React.ReactNode;
  wechatQrcodeProps?: Partial<CanvasQRCodeProps | SvgQRCodeProps>;
  className: string;
  style: React.CSSProperties;
}

export type ReactShareComponentsProps = Partial<ShareProps>;

function getMetaContentByName(name) {
  return ((document.getElementsByName(name)[0] || 0) as HTMLMetaElement)
    .content;
}

const getDefaultProps = (): ShareProps => {
  const { href: url, origin } = window.location;
  const image = (document.images[0] || 0).src || '';
  const title =
    getMetaContentByName('title') ||
    getMetaContentByName('Title') ||
    document.title;
  const description =
    getMetaContentByName('description') ||
    getMetaContentByName('Description') ||
    '';
  const site =
    getMetaContentByName('site') ||
    getMetaContentByName('Site') ||
    document.title;
  const sites: ShareSitesTypesGroup = [
    'weibo',
    'qq',
    'wechat',
    'douban',
    'qzone',
    'linkedin',
    'facebook',
    'twitter',
    'google',
  ];
  return {
    url,
    origin,
    title,
    image,
    description,
    summary: description,
    sites,
    source: site,
    disabled: [],
    weiboKey: '',
    wechatQrcodeTitle: '微信扫一扫：分享',
    wechatQrcodeHelper: (
      <>
        <p>微信里点“发现”，扫一下</p>
        <p>二维码便可将本文分享至朋友圈。</p>
      </>
    ),
    wechatQrcodeProps: {
      size: 100,
    },
    className: '',
    style: {},
  };
};

const qsStringify = obj => {
  return Object.keys(obj).reduce((res, field, key) => {
    return (res += `${key ? '&' : '?'}${field}=${obj[field]}`);
  }, '');
};

const encodeNames = [
  'url',
  'title',
  'description',
  'image',
  'site',
  'origin',
  'origin',
];

const encodeOptions = (options: ShareProps) => {
  const data = encodeNames.reduce((res, name) => {
    return {
      ...res,
      [name]: encodeURIComponent(options[name]),
    };
  }, {});
  return {
    ...options,
    ...data,
  };
};

const filterSites = (
  sites: ShareSitesTypesGroup,
  exclude: ShareSitesTypesGroup
) => sites.filter(item => !exclude.includes(item));

const ReactShareComponents: React.FC<ShareProps> = ({ children, ...rest }) => {
  const {
    title,
    description,
    image,
    source,
    origin,
    url,
    sites = [],
    summary,
    disabled,
    weiboKey,
    wechatQrcodeTitle,
    wechatQrcodeHelper,
    wechatQrcodeProps = {},
    className,
    style,
  } = encodeOptions(rest);

  const templates = {
    qzone: `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey${qsStringify(
      {
        url,
        title,
        desc: description,
        summary,
        site: source,
        pics: image,
      }
    )}`,
    qq: `http://connect.qq.com/widget/shareqq/index.html${qsStringify({
      url,
      title,
      source,
      desc: description,
      pics: image,
      summary,
    })}`,
    weibo: `https://service.weibo.com/share/share.php${qsStringify({
      url,
      title,
      pic: image,
      appkey: weiboKey,
    })}`,
    wechat: 'javascript:;',
    douban: `http://shuo.douban.com/!service/share${qsStringify({
      href: url,
      name: title,
      text: description,
      image,
      starid: 0,
      aid: 0,
      style: 11,
    })}`,
    linkedin: `http://www.linkedin.com/shareArticle${qsStringify({
      mini: true,
      ro: true,
      title,
      url,
      summary,
      source,
      armin: 'armin',
    })}`,
    facebook: `https://www.facebook.com/sharer/sharer.php${qsStringify({
      u: url,
    })}`,
    twitter: `https://twitter.com/intent/tweet${qsStringify({
      text: title,
      url,
      via: origin,
    })}`,
    google: `https://plus.google.com/share${qsStringify({
      url,
    })}`,
  };
  return (
    <div
      className={`social-share${className ? ` ${className}` : ''}`}
      style={style}
    >
      {filterSites(sites, disabled).map((site, i) => {
        const isWechat = Object.is(site, 'wechat');
        return (
          <a
            key={i}
            className={`icon-${site} social-share-icon`}
            href={isWechat ? '#' : templates[site]}
            {...(isWechat
              ? {
                  onClick: e => e.preventDefault(),
                }
              : {
                  target: '_blank',
                })}
          >
            {isWechat && (
              <div className="wechat-qrcode">
                <h4>{wechatQrcodeTitle}</h4>
                <div className="qrcode">
                  <QRCode
                    style={{ verticalAlign: 'middle' }}
                    value={url}
                    {...(wechatQrcodeProps as any)}
                  />
                </div>
                <div className="help">{wechatQrcodeHelper}</div>
              </div>
            )}
          </a>
        );
      })}
      {children}
    </div>
  );
};

ReactShareComponents.defaultProps = getDefaultProps();

export default ReactShareComponents as React.FC<ReactShareComponentsProps>;
