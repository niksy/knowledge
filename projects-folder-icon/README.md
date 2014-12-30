# Set "Projects" folder icon

This will set your "Projects" folder icon to more convenient one like "Developer" folder icon.

```sh
cd ~
mkdir ProjectsTemp
cd ProjectsTemp
cp /System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/DeveloperFolderIcon.icns DeveloperFolderIcon.icns
brew tap niksy/pljoska
brew install setfileicon
mkdir Projects
setfileicon DeveloperFolderIcon.icns Projects
mv Projects ~
cd ..
rm -rf ProjectsTemp
```
