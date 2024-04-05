const fs = require('fs);

//read the JSON file containing job dependencies
const jobDependencies = JSON.parse(fs.readFilesync('scripts/job_dependencies.json'));

//Function to recursively determine job dependencies
function getDependencies(job){
  if(jobDependencies[job]){
    return jobDependencies[job].flatMap(dependency => [dependency, ...getDependencies(dependency)]);
  }
  else{
    return [];
  }
}

//Get dependencies for prod job
const dependenciesForProd = get Dependencies('prod');
console.log(dependenciesForProd.join(','));
