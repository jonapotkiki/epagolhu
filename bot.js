const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTQzODM3NTc5NDIyOTkwMzQ4.D0CeeA.vTbSpNNKaYDC8xI7730__ph1Pes'

bot.on('message', function(message){
    if(message.content == '/segítség')
    {
        message.reply('Szia! Rectón helyettesítésével vagyok megbízva, amikor ő nem elérhető! :) Szóval miben segíthetek? (!ötletemlenne)');
    }
});


bot.on('message', function(message){
    if(message.content == '/ötletemlenne')
    {
        message.channel.send('Ezt örömmel hallom :). Kíváncsian várom az ötletedet az #ötletszoba -ba, vagy az otletek@epagol.hu email címre.');
    }

});


bot.on('ready', () => {
    bot.user.setGame('/segítség')
  })


//runs the message looker thingy
bot.on('message', async message => {
    //1 blacklisted words
    let blacklisted = ['barom', 'rohadék', 'kurva', 'fasz', 'balfasz', 'kuksi', 'kuki', 'szar', 'Aberált', 'Abnormális', 'Abortuszmaradék', 'Abszolút hülye', 'Ádáz', 'Ágrólszakadt', 'Agyabugyált', 'Agyalágyult', 'Agyatlan', ,'Agybatetovált', 'Ágybavizelős', 'Agyfasz', 'Agyhalott', 'Agyonkúrt', 'Agyonvert', 'Agyrákos', 'AIDS-es', 'Akaratos', 'Akcentustalan', 'Alaktalan', 'Alapvetően', 'fasz', 'Alkoholista', 'Állatkínzó', 'Alpári', 'Alulmaradt', 'Alultáplált', 'Amnéziás', 'Analfabéta', 'Anarchista', 'Animalsex-mániás', 'Anorexiás', 'Antibarom', 'Anyámasszony katonája', 'Anyaszomorító', 'Anyatetű', 'Apafej', 'Ápolatlan', 'Aprófaszú', 'Aranyeres', 'Arcátlan', 'Arcbarakott', 'Arrogáns', 'Arzénos', 'Áskálódó', 'Aszalék', 'Aszaltfaszú', 'Aszott', 'Átbaszott', 'Átejtett', 'Átkozott', 'Átverhető', 'Azt a kurva de fasz', 'Bababöfi', 'Balfácán', 'Balfasz', 'Balfék', 'Balfészek', 'Balfiók', 'Balga', 'Baljós', 'Baljós árny', 'Balkáni', 'Balkezes', 'Bandzsa', 'Bányarém', 'Bárány', 'Bárgyú', 'Barom', 'Baromfi', 'Baromfifasz', 'Basz-o-matic', 'Baszhatatlan', 'Basznivaló', 'Batári', 'Bazmeg', 'Bazdmeg', 'Bazzeg', 'Bebaszott', 'Bebörtönzött', 'Becsavarodott', 'Befosi', 'Begolyózott', 'Begyöpösödött', 'Behemót', 'Békapicsa', 'Beképzelt', 'Bekómált', 'Bekrepált', 'Bél', 'Bélböfi', 'Beleiből kiforgatott', 'Beles', 'Bélféreg', 'Bélpoklos', 'Bélszél', 'Béltartalom', 'Bennszülött', 'Benyomott', 'Beszari', 'Beteges', 'Betonfejű', 'Biszexuális', 'Bitang', 'Bitóravaló', 'Böffentyű', 'Böfögős', 'Bogaras', 'Bőgő masina', 'Böhöm', 'Bölény', 'Bolhafészek', 'Bolhanyakörves', 'Bolhás', 'Bolond', 'Bonyolult', 'Bőrfejű', 'Börtöntöltelék', 'Borzalmas', 'Borzasztó', 'Böszme', 'Boszorkány', 'Bosztohó', 'Botrányos', 'Bóvli', 'Boxos', 'Brunya', 'Brutális', 'Budi', 'Büdös', 'Büdösszájú', 'Buggyant', 'Bugyuta']
    //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
        message.reply('Csak azt szeretné mondani, hogy szeret! :)')
    }

  });

  


bot.login(TOKEN)