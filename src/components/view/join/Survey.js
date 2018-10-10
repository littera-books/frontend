import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { listQuestion, saveResult } from '../../../reducers/reducer.question';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './Survey.styled';

class Survey extends React.Component {
  componentDidMount() {
    const { getListQuestion } = this.props;
    getListQuestion();
  }

  onSubmit(payload) {
    const { save, history } = this.props;
    save(payload);
    history.push('/add-info');
  }

  renderQuestionItems() {
    const { questionItems } = this.props;
    return _.map(questionItems, (item) => {
      const index = _.findIndex(questionItems, o => o.id === item.id) + 1;
      return (
        <Styled.QuestionItem key={item.id}>
          <fieldset style={{ border: 'none' }}>
            <legend>{`${index}. ${item.title}`}</legend>
            {_.map(item.selection_items, selection => (
              <Styled.SelectionItem key={selection.id}>
                <label htmlFor={`question-${item.id}`}>
                  <Field
                    name={`question-${item.id}`}
                    component="input"
                    type="radio"
                    value={`selection-${selection.id}`}
                    required
                  />
                  <Styled.SelectionText>
                    {selection.select}
                  </Styled.SelectionText>
                </label>
              </Styled.SelectionItem>
            ))}
          </fieldset>
        </Styled.QuestionItem>
      );
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Styled.ScrollFlexWrapper>
        <Helmet pageTitle="Survey" />
        <Wrapper.ColumnWrapper>
          <Styled.MarginForm
            action="post"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            {this.renderQuestionItems()}
            <Styled.AlignRightButton type="submit">
              Submit
            </Styled.AlignRightButton>
          </Styled.MarginForm>
        </Wrapper.ColumnWrapper>
      </Styled.ScrollFlexWrapper>
    );
  }
}

Survey.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getListQuestion: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  questionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  questionItems: state.question.items,
});

const mapDispatchToProps = dispatch => ({
  getListQuestion: () => dispatch(listQuestion()),
  save: payload => dispatch(saveResult(payload)),
});

export default reduxForm({
  form: 'SelectSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Survey),
);
