import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import en_GB from "@douyinfe/semi-ui/lib/es/locale/source/en_GB";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";
import ko_KR from "@douyinfe/semi-ui/lib/es/locale/source/ko_KR";
import ja_JP from "@douyinfe/semi-ui/lib/es/locale/source/ja_JP";
import vi_VN from "@douyinfe/semi-ui/lib/es/locale/source/vi_VN";
import ru_RU from "@douyinfe/semi-ui/lib/es/locale/source/ru_RU";
import id_ID from "@douyinfe/semi-ui/lib/es/locale/source/id_ID";
import ms_MY from "@douyinfe/semi-ui/lib/es/locale/source/ms_MY";
import th_TH from "@douyinfe/semi-ui/lib/es/locale/source/th_TH";
import tr_TR from "@douyinfe/semi-ui/lib/es/locale/source/tr_TR";
import pt_BR from "@douyinfe/semi-ui/lib/es/locale/source/pt_BR";
import zh_TW from "@douyinfe/semi-ui/lib/es/locale/source/zh_TW";
import ar from "@douyinfe/semi-ui/lib/es/locale/source/ar";
import { LocaleProvider } from "@douyinfe/semi-ui";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

i18n.use(initReactI18next).init({
  resources: {
    en_GB,
    en_US,
    ko_KR,
    ja_JP,
    vi_VN,
    ru_RU,
    id_ID,
    ms_MY,
    th_TH,
    tr_TR,
    pt_BR,
    zh_TW,
    ar,
    zh_CN,
  },
  lng: "zh_CN",
  fallbackLng: "zh_CN",
  interpolation: { escapeValue: false }, // React already does escaping
});

const language = {
  zh_CN: zh_CN,
  en_US: en_US,
  en_GB: en_GB,
  ko_KR: ko_KR,
  ja_JP: ja_JP,
  ar: ar,
  vi_VN: vi_VN,
  ru_RU: ru_RU,
  id_ID: id_ID,
  ms_MY: ms_MY,
  th_TH: th_TH,
  tr_TR: tr_TR,
  pt_BR: pt_BR,
  zh_TW: zh_TW,
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <LocaleProvider locale={language["en_US"]}>
        <I18nextProvider i18n={i18n}>
          <MantineProvider>
            <NotificationsProvider>
              <ModalsProvider>
                <App />
              </ModalsProvider>
            </NotificationsProvider>
          </MantineProvider>
        </I18nextProvider>
      </LocaleProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
