// import mailchimp from '@mailchimp/mailchimp_marketing';
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "2ad50c2a597fbd437cb390d2418ffd27-us11",
  server: "us11",
});

export async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}


  