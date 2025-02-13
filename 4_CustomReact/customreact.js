function customRender(reactElement, container){
    /*
    VARITION - 1 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    //The problem in above varition is that, our code is hardcoded only for 2 attributes "href" and "target". What if we have only 1 attrinute or more more than 2 attributes, In this case, our code wont work
    //Thus to make it more modular, we will apply a Loop across all attributes 

    // VARITION - 2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a', 
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const reactElement2 = {
    type: 'p', //No props/attributes for Para tag
    children: 'Hello World'
}

const reactElement3 = {
    type: 'img', 
    props: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_rvvhoW_31sMqdlhHm85ux23ld7mLfX6gA&s',
        alt: 'Shah Rukh Khan'
    }
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
customRender(reactElement2, mainContainer)
customRender(reactElement3, mainContainer)