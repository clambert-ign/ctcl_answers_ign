const componentsMapping = [
    { componentName: 'HeroHeader', acousticComponentName: 'Kanso-Component-HeroHeader' },
    { componentName: 'StandardHeader', acousticComponentName: 'Kanso-Component-StandardHeader' },
    { componentName: 'PageSection', acousticComponentName: 'Kanso-Pattern-PageSection' },
    { componentName: 'SectionTitle', acousticComponentName: 'Kanso-Atom-SectionTitle' },
    { componentName: 'SectionFooter', acousticComponentName: 'Kanso-Atom-SectionFooter' },
    { componentName: 'ContentCard', acousticComponentName: 'Kanso-Component-ContentCard' },
    { componentName: 'ContentCardItem', acousticComponentName: 'Kanso-Component-ContentCardItem' },
    { componentName: 'ContentCardTile', acousticComponentName: 'Kanso-Component-ContentCardTile' },
    { componentName: 'ContentCardTileItem', acousticComponentName: 'Kanso-Component-ContentCardTileItem' },
    { componentName: 'Accordion', acousticComponentName: 'Kanso-Component-Accordion' },
    { componentName: 'Tabs', acousticComponentName: 'Kanso-Component-Tabs' },
    { componentName: 'Carousel', acousticComponentName: 'Kanso-Component-Carousel' },
    { componentName: 'Editorial', acousticComponentName: 'Kanso-Pattern-Editorial' },
    { componentName: 'EditorialText', acousticComponentName: 'Kanso-Atom-EditorialText' },
    { componentName: 'Image', acousticComponentName: 'Kanso-Atom-Image' },
    { componentName: 'Video', acousticComponentName: 'Kanso-Atom-Video' },
    { componentName: 'Audio', acousticComponentName: 'Kanso-Atom-Audio' },
    { componentName: 'CalloutQuote', acousticComponentName: 'Kanso-Component-CalloutQuote' },
    { componentName: 'Person', acousticComponentName: 'Kanso-Component-Person' },
    { componentName: 'PersonList', acousticComponentName: 'Kanso-Pattern-PersonList' },
    { componentName: 'ImageList', acousticComponentName: 'Kanso-Pattern-ImageList' },
    { componentName: 'Divider', acousticComponentName: 'Kanso-Atom-Divider' }
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
