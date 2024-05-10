import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from "./Section";

import { EXAMPLES } from '../data.js';
import Tabs from './Tabs.jsx';


function Examples() {
    const [topic, setTopic] = useState("");

    function handleSelect(tabName) {
        setTopic(tabName);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs Container={"menu"}
            buttons={
                <>
                    <TabButton isSelected={topic === 'components'}
                    onClick={() => handleSelect("components")}>
                        Components
                    </TabButton>
                    <TabButton isSelected={topic === 'jsx'}
                    onClick={() => handleSelect("jsx")}>
                        JSX
                    </TabButton>
                    <TabButton isSelected={topic === 'props'}
                    onClick={() => handleSelect("props")}>
                        Props
                    </TabButton>
                    <TabButton isSelected={topic === 'state'}
                    onClick={() => handleSelect("state")}>
                        State
                    </TabButton>
                </>
            }>
                {
                    !topic ? <p>Please select a topic.</p> :
                    <div id="tab-content">
                        <h3>{EXAMPLES[topic].title}</h3>
                        <p>{EXAMPLES[topic].description}</p>
                        <pre>
                        <code>{EXAMPLES[topic].code}</code>
                        </pre>
                    </div>
                }
            </Tabs>
        </Section>
    )
}

export default Examples