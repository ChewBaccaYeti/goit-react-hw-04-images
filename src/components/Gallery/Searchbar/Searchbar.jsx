import { Component } from 'react';
import { Header, Form, Button, Label, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  // input recording in state
  handleChangeSearchQuery = e => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    this.setState({ searchQuery });
  };

  // Передаю до App значеня searchQuery і очищую форму
  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Label>
              <BsSearch />
            </Label>
          </Button>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChangeSearchQuery}
          />
        </Form>
      </Header>
    );
  }
}
