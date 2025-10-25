const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('')
  const index = arr.lastIndexOf('@')
  const emailDomain = arr.slice(index + 1).join('')
  return emailDomain;
}

module.exports = {
  getEmailDomain
};
