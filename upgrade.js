const { execSync } = require('child_process');
const readPkg = require('read-pkg');


(async () => {
  execSync('yarn add @otfl/build');
  try {
    const pkg = await readPkg();
    const currentVersion = pkg.dependencies['@otfl/build'];
    execSync('git add .');
    execSync(`git commit -m "Upgraded @otfl/build to version ${currentVersion}"`);
  } catch(e) {
    throw e;
  }
})().catch((e) => console.error(e));
