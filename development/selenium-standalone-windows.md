# Standalone Selenium server, Windows

1. [Install IE VMs](../vm.md)
1. `VBoxManage controlvm "{VMNAME}" natpf1 "selenium,tcp,127.0.0.1,4444,10.0.2.15,4444"`
1. [Download Java](http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1880261.html)
1. [Download Node.js](http://nodejs.org/download/)
1. Install Java and Node.js
1. Open Command Prompt
1. `npm install -g selenium-standalone`
1. `selenium-standalone install`
1. `selenium-standalone start`
1. Unblock every requested service

## References

* https://github.com/conceptsandtraining/modernie_selenium
* http://elgalu.github.io/2014/run-protractor-against-internet-explorer-vm/
* https://github.com/double16/ie-selenium
