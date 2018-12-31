import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';
import { listQuestion, postResult } from '../../../reducers/reducer.question';
import {
  setScroll,
  ScrollFilters,
} from '../../../reducers/reducer.controlScroll';
import { setClose, CloseFilters } from '../../../reducers/reducer.controlClose';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';
import ScrollCloseButton from '../../structure/scroll_close_button/ScrollCloseButton';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './Survey.styled';

class Survey extends React.Component {
  async componentDidMount() {
    const { read, retrieve } = this.props;
    await read();
    const { userId } = this.props;
    await retrieve(userId);

    const {
      getListQuestion, scroll, close, hasSurvey,
    } = this.props;

    if (!hasSurvey) {
      await getListQuestion();
      scroll(ScrollFilters.ENABLE_SCROLL);
      close(CloseFilters.HIDE_CLOSE);
    }
  }

  componentWillUnmount() {
    const { scroll, close } = this.props;
    scroll(ScrollFilters.UNABLE_SCROLL);
    close(CloseFilters.SHOW_CLOSE);
  }

  async onSubmit(payload) {
    const { post, userId, history } = this.props;
    await post(userId, payload);
    await history.replace('/log');
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
    const { handleSubmit, hasSurvey } = this.props;

    if (hasSurvey) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Survey" />
          <h1>{dataConfig.surveyDeniedText}</h1>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Survey" />
        <Wrapper.ScrollWrapper>
          <ScrollCloseButton />
          <Styled.CenterWrapper>
            <Styled.MarginForm
              action="post"
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
              {this.renderQuestionItems()}
              <Element.SubmitButton type="submit">Submit</Element.SubmitButton>
            </Styled.MarginForm>
          </Styled.CenterWrapper>
        </Wrapper.ScrollWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

Survey.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getListQuestion: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired,
  questionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  scroll: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  hasSurvey: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  hasSurvey: state.user.hasSurvey,
  questionItems: state.question.items,
  isAccepted: state.question.isAccepted,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  retrieve: userId => dispatch(retrieveInfo(userId)),
  getListQuestion: () => dispatch(listQuestion()),
  post: (userId, payload) => dispatch(postResult(userId, payload)),
  scroll: filter => dispatch(setScroll(filter)),
  close: filter => dispatch(setClose(filter)),
});

export default reduxForm({
  form: 'SelectSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Survey),
);
