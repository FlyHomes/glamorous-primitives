import React from 'react';
import 'react-brimitives';
import glamorous, { ThemeProvider } from 'glamorous-primitives';

const StyledView = glamorous.view({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const StyledText = glamorous.text({
  color: 'pink',
  fontSize: '20px'
})

class App extends React.Component {
	render() {
		return (
      <StyledView>
        <StyledText>Hello World</StyledText>
      </StyledView>
		);
	}
}
