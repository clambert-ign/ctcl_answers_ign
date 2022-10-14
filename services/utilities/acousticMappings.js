const componentsMapping = [
    { componentName: 'HeroHeader', acousticComponentName: 'Kanso-Component-HeroHeader' },
    { componentName: 'StandardHeader', acousticComponentName: 'Kanso-Component-StandardHeader' },
    { componentName: 'PageSection', acousticComponentName: 'Kanso-Pattern-PageSection' },
    { componentName: 'Editorial', acousticComponentName: 'Kanso-Pattern-Editorial' },
    { componentName: 'ContentCard', acousticComponentName: 'Kanso-Component-ContentCard' },
    { componentName: 'EditorialText', acousticComponentName: 'Kanso-Atom-EditorialText' },
    { componentName: 'Image', acousticComponentName: 'Kanso-Atom-Image' },
    { componentName: 'Divider', acousticComponentName: 'Kanso-Atom-Divider' },
    { componentName: 'Video', acousticComponentName: 'Kanso-Atom-Video' },
    { componentName: 'Audio', acousticComponentName: 'Kanso-Atom-Audio' }
]

export const getComponentName = (componentType) => {
    if (componentType) {
        let componentMapped = componentsMapping.find((item) => item.acousticComponentName === componentType)

        if (componentMapped) {
            return componentMapped.componentName
        }
    }
}

export const templateTypes = ['Kanso-Template-Flexi']
