// --------------------------------------------------------------------------------------------------------------------

// npm

// --------------------------------------------------------------------------------------------------------------------

function setup() {
  console.log("Running 'setup ...")
}

function newRepo(name, desc) {
  console.log("Running 'new repo' ...")
  console.log(' - name (dir) = ' + name);
  console.log(' - description = ' + desc);
}

function backup(bucketName) {
  console.log("Running 'backup' ...")
  console.log('Backing up to bucket ' + bucketName);
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = {
  setup   : setup,
  newRepo : newRepo,
  backup  : backup,
}

// --------------------------------------------------------------------------------------------------------------------
