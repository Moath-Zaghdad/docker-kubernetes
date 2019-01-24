# Docker with Kubernetes

This is the same project of [docker-elastic-beanstalk](https://github.com/Moath-Zaghdad/docker-elastic-beanstalk) but we are using **Kubernetes** 


### Kubernetes architecture
![Arch](./Architecture.png)

***NOTE*** We need to manually setup a secret on the K8s Cluster
 - `kubectl create secret generic pgpassword --from-literal PGPASSWORD=<anyPostgresPassword>`
