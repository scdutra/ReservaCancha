export class AppSettings {
   public API_ENDPOINT=//'http://10.0.4.250:85/canchas';
   'http://www.seiti.com.ar:85/canchas';
   //'http://10.0.4.250:85/api';
   public DEMO ='ON';
   public DEMO_ENDPOINT='/api';
   public static endpoint: string;

   constructor() {
     if(this.DEMO === 'ON')
     endpoint => (AppSettings.endpoint = this.DEMO_ENDPOINT);
     else
     endpoint => (AppSettings.endpoint = this.API_ENDPOINT);
     console.log(AppSettings.endpoint);
   }
}
