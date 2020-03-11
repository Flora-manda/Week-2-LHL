  
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name?", name => {
  rl.question("What activity do you like?", activity => {
    rl.question("What do music do you like while doing your hobby?", music => {
      rl.question("Which meal is your favourite?", meal => {
        rl.question(
          "What's your favourite thing to eat for that meal?",
          food => {
            rl.question("Which sport is your favourite?", sport => {
              rl.question("What is your super power?", superpower => {
                rl.question("Tell us what you're amazing at!", power => {
                  console.log(
                    `${name} loves ${music} while playing ${activity} and haves ${meal} which is ${food} right after. Although ${name} likes to watch ${sport}. My superpower is ${superpower} and I'm amazing at ${power}.`
                  );
                  rl.close();
                });
              });
            });
          }
        );
      });
    });
  });
});