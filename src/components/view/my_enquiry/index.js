import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { readToken, retrieveInfo } from '../../../reducers/reducer.user';
import {
  listQuestion,
  postResult,
  listResult,
} from '../../../reducers/reducer.question';
import {
  setScroll,
  ScrollFilters,
} from '../../../reducers/reducer.controlScroll';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './styled';

const SelectionItems = ({
  hasSurvey,
  selectionItems,
  resultItems,
  questionId,
}) => _.map(selectionItems, selection => (
    <Styled.SelectionItem key={selection.id}>
      <label htmlFor={`question-${questionId}`}>
        <Field
          name={`question-${questionId}`}
          component="input"
          type="radio"
          value={`selection-${selection.id}`}
          required
          checked={
            hasSurvey && _.find(resultItems, o => o.id === selection.id)
              ? true
              : undefined
          }
          disabled={hasSurvey}
        />
        <Styled.SelectionText>{selection.select}</Styled.SelectionText>
      </label>
    </Styled.SelectionItem>
));

const QItems = ({ hasSurvey, questionItems, resultItems }) => _.map(questionItems, (item, i) => (
    <Styled.QuestionItem key={item.id}>
      <fieldset style={{ border: 'none' }}>
        <legend>{`${i + 1}. ${item.title}`}</legend>
        <SelectionItems
          hasSurvey={hasSurvey}
          selectionItems={item.selection_items}
          resultItems={resultItems}
          questionId={item.id}
        />
      </fieldset>
    </Styled.QuestionItem>
));

class Survey extends React.Component {
  async componentDidMount() {
    const {
      read, retrieve, scroll, getListQuestion,
    } = this.props;

    await scroll(ScrollFilters.ENABLE_SCROLL);
    await getListQuestion();
    await read();

    const { userId } = this.props;
    await retrieve(userId);

    const { hasSurvey, getListResult } = this.props;
    if (hasSurvey) {
      await getListResult(userId);
    }
  }

  componentWillUnmount() {
    const { scroll } = this.props;
    scroll(ScrollFilters.UNABLE_SCROLL);
  }

  async onSubmit(payload) {
    const { post, userId, history } = this.props;
    await post(userId, payload);
    await history.replace(domainConfig.log.path);
  }

  render() {
    const {
      handleSubmit,
      hasSurvey,
      match,
      questionItems,
      resultItems,
    } = this.props;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.myEnquiry.title} path={match.url} />
        <Wrapper.ScrollWrapper>
          <Styled.CenterWrapper>
            <form
              action="post"
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
              <QItems
                hasSurvey={hasSurvey}
                questionItems={questionItems}
                resultItems={resultItems}
              />
              <Element.SubmitButton type="submit" disabled={hasSurvey}>
                Submit
              </Element.SubmitButton>
            </form>
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
  getListResult: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired,
  questionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  resultItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  scroll: PropTypes.func.isRequired,
  hasSurvey: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  hasSurvey: state.user.hasSurvey,
  questionItems: state.question.items,
  resultItems: state.question.resultItems,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  retrieve: userId => dispatch(retrieveInfo(userId)),
  getListQuestion: () => dispatch(listQuestion()),
  getListResult: userId => dispatch(listResult(userId)),
  post: (userId, payload) => dispatch(postResult(userId, payload)),
  scroll: filter => dispatch(setScroll(filter)),
});

export default reduxForm({
  form: 'SelectSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Survey),
);
