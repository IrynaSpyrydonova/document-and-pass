const fs = require("fs");
const path = require("path");
const interceptStdout = require('./lib/intercept-stdout');

const Jasmine = require('jasmine');

const config = JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, '..', 'config.json')), 'utf-8'));

const EXERCISES_DIR = path.normalize(path.join(__dirname, '..', config.path));

try {
  fs.accessSync(EXERCISES_DIR);
} catch (err) {
  console.log(`--- creating ${config.path} directory ---`);
  fs.mkdirSync(EXERCISES_DIR);
};

const paths = fs.readdirSync(EXERCISES_DIR);

const testExercise = (paths, index) => {
  if (paths.length === index) { return; }

  const nextPath = paths[index];
  console.log(nextPath)

  const subPath = path.normalize(path.join(EXERCISES_DIR, nextPath));

  const isDirectory = fs.statSync(subPath).isDirectory();
  if (!isDirectory) {
    testExercise(paths, index + 1);
    return;
  }



  const indexPath = path.normalize(path.join(subPath, 'index.js'));
  const hasIndex = fs.existsSync(indexPath);

  if (!hasIndex) {
    testExercise(paths, index + 1);
    return;
  }

  const reportPath = path.normalize(path.join(subPath, 'report.txt'));

  fs.writeFileSync(reportPath, '');

  const unhook_intercept = interceptStdout(function (text) {
    const colorsRemoved = text
      .split('[32m').join('')
      .split('[31m').join('')
      .split('[0m').join('')
      .split('').join('.');

    const stackRegex1 = /\s+Stack[^\n]+/g;
    const stackRegex2 = /\s+at [^\n]+/g;
    const stackRemoved = colorsRemoved
      .replace(stackRegex1, '')
      .replace(stackRegex2, '');

    fs.appendFileSync(reportPath, stackRemoved);
  });


  const jasmine = new Jasmine();

  const jasmineConfig = {
    spec_dir: `${config.path}/${nextPath}`,
    spec_files: [
      '**/*[sS]pec.js',
    ],
    random: false
  };
  jasmine.loadConfig(jasmineConfig);

  jasmine.onComplete(function (passed) {
    // Stop capturing stdout.
    unhook_intercept();
    // test the next exercise
    console.log(passed)
    testExercise(paths, index + 1);
  });

  jasmine.execute();

};

testExercise(paths, 0);
