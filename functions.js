// //LIBS
//
// const got_1 = require("got");
// const { v4: uuidv4 } = require('uuid')
// const date_fns_1 = require("date-fns");
// const time = (plus = 0) => date_fns_1.getUnixTime(new Date()) + plus;
// const dateString = (date) => date_fns_1.format(date, 'yyyy-MM-dd');
// const uonet_request_signer_node_1 = require("@wulkanowy/uonet-request-signer-node");
// const credentials = {
//   symbol:'',
//   pin:'',
//   token:''
// }
// const AdresBazowyRestApi= ''
// const CertyfikatPfx = ''
// const CertyfikatKlucz = ''
// const JednostkaSprawozdawczaSymbol = ''
// const DATA = {
//   CertyfikatKlucz: '',
//   CertyfikatKluczSformatowanyTekst: '',
//   CertyfikatDataUtworzenia: ,
//   CertyfikatDataUtworzeniaSformatowanyTekst: '',
//   CertyfikatPfx: '',
//   GrupaKlientow: '',
//   AdresBazowyRestApi: '',
//   UzytkownikLogin: '',
//   UzytkownikNazwa: '',
//   TypKonta: null
// }
// const DataPoczatkowa = ;
// const DataKoncowa = ;
// const LoginId = ;
// const IdUczen = ;
// const IdOkresKlasyfikacyjny = ;
//
// class ACCOUNT {
//     constructor(data, students) {
//         this.data = data;
//         this.students = students.map(student => new PROFILE(student, this));
//     }
//     async basicRequest(method, data) {
//         const path = `/mobile-api/Uczen.v3.UczenStart/${method}`;
//         const body = JSON.stringify(Object.assign({}, {
//             RemoteMobileTimeKey: time(),
//             TimeKey: time(-1),
//             RequestId: uuidv4(),
//             RemoteMobileAppVersion: "18.4.1.388",
//             RemoteMobileAppName: "VULCAN-Android-ModulUcznia",
//         }, data));
//         const headers = {
//             RequestCertificateKey: CertyfikatKlucz,
//             RequestSignatureValue: await uonet_request_signer_node_1.signContent("CE75EA598C7743AD9B0B7328DED85B06", CertyfikatPfx, body),
//             'User-Agent': "MobileUserAgent",
//             'Content-Type': "application/json; charset=UTF-8",
//         };
//         const request = await got_1.post(path, { body, headers, baseUrl: AdresBazowyRestApi });
//         return JSON.parse(request.body).Data;
//     }
//     async reloadStudents() {
//         this.students = (await this.basicRequest('ListaUczniow', {}))
//             .map((student) => {
//               new PROFILE(student, this);
//             })
//     }
//     export() {
//         return {
//             account: this.data,
//             students: this.students.map(stu => stu.export()),
//         };
//     }
// }
//
// class PROFILE {
//     constructor(data, context) {
//         this.data = data;
//         this.context = context;
//     }
//     async basicRequest(method, data) {
//         const path = `/${JednostkaSprawozdawczaSymbol}/mobile-api/Uczen.v3.Uczen/${method}`;
//         const body = JSON.stringify(Object.assign({}, {
//           RemoteMobileTimeKey: time(),
//           TimeKey: time(-1),
//           RequestId: uuidv4(),
//           RemoteMobileAppVersion: "18.4.1.388",
//           RemoteMobileAppName: "VULCAN-Android-ModulUcznia"
//         }, data));
//         const headers = {
//             RequestCertificateKey: CertyfikatKlucz,
//             RequestSignatureValue: await uonet_request_signer_node_1.signContent("CE75EA598C7743AD9B0B7328DED85B06", CertyfikatPfx, body),
//             'User-Agent': "MobileUserAgent",
//             'Content-Type': "application/json; charset=UTF-8",
//         };
//         const request = await got_1.post(path, { body, headers, baseUrl: AdresBazowyRestApi });
//         return JSON.parse(request.body).Data;
//     }
//     async getMessages() {
//         return this.basicRequest('WiadomosciOdebrane', {
//             LoginId:LoginId,
//             IdUczen: IdUczen,
//             DataPoczatkowa: DataPoczatkowa,
//             DataKoncowa: DataKoncowa,
//         });
//     }
//     async getGrades() {
//         return this.basicRequest('Oceny', {
//             IdOkresKlasyfikacyjny:IdOkresKlasyfikacyjny,
//             IdUczen: IdUczen,
//         });
//     }
//     export() {
//         return this.data;
//     }
// }
// async function Login() {
//       const baseUrls = await got_1.get('https://komponenty.vulcan.net.pl/UonetPlusMobile/RoutingRules.txt');
//       const [, baseUrl] = baseUrls.body.split('\n').map(line => line.replace('\r', '').split(','))
//            .find(line => line[0] === credentials.token.substring(0, 3)) || [, 'http://api.fakelog.cf'];
//       const headers = {
//           RequestMobileType: 'RegisterDevice',
//           'User-Agent': 'MobileUserAgent',
//           'Content-Type': 'application/json',
//       };
//       const body = JSON.stringify({
//           PIN: credentials.pin,
//           TokenKey: credentials.token,
//           AppVersion: '18.4.1.388',
//           DeviceId: uuidv4(),
//           DeviceName: `SAMSUNG#BOOMBOOM`,
//           DeviceNameUser: '',
//           DeviceDescription: '',
//           DeviceSystemType: 'Android',
//           DeviceSystemVersion: "6.0.1",
//           RemoteMobileTimeKey: time(),
//           TimeKey: time(-1),
//           RequestId: uuidv4(),
//           RemoteMobileAppVersion: '18.4.1.388',
//           RemoteMobileAppName: 'VULCAN-Android-ModulUcznia',
//       });
//       const certRes = await got_1.post(`/${credentials.symbol}/mobile-api/Uczen.v3.UczenStart/Certyfikat`, { baseUrl, headers, body })
//           .then((res) =>{
//             JSON.parse(res.body).TokenCert
//           });
//           const account = new ACCOUNT(certRes, []);
//           let x = await account.reloadStudents();
//           const student = new PROFILE()
//           let y = await student.getMessages()
// }
//
// Login()
